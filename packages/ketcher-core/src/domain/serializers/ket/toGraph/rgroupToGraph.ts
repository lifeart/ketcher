/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/

import { Struct } from 'domain/entities'
import { ifDef } from 'utils'
import { moleculeToGraph } from './moleculeToGraph'

export function rgroupToGraph(struct: Struct, data) {
  const body = {
    rlogic: rgroupLogicToGraph(data.rgnumber, data.rgroup),
    ...moleculeToGraph(struct)
  }

  return {
    ...body,
    type: 'rgroup'
  }
}

function rgroupLogicToGraph(rgnumber, rglogic) {
  const result = {}

  ifDef(result, 'number', rgnumber)
  ifDef(result, 'range', rglogic.range, '')
  ifDef(result, 'resth', rglogic.resth, false)
  ifDef(result, 'ifthen', rglogic.ifthen, 0)

  return result
}
