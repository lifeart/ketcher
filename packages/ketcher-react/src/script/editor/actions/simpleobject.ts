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

import {
  SimpleObjectAdd,
  SimpleObjectDelete,
  SimpleObjectResize
} from '../operations'

import Action from '../shared/action'

export function fromSimpleObjectDeletion(restruct, id) {
  const action = new Action()
  action.addOp(new SimpleObjectDelete(id))
  return action.perform(restruct)
}

export function fromSimpleObjectAddition(restruct, pos, mode, toCircle) {
  var action = new Action()
  action.addOp(new SimpleObjectAdd(pos, mode, toCircle))
  return action.perform(restruct)
}

export function fromSimpleObjectResizing(
  restruct,
  id,
  d,
  current,
  anchor,
  toCircle
) {
  var action = new Action()
  action.addOp(new SimpleObjectResize(id, d, current, anchor, false, toCircle))
  return action.perform(restruct)
}
