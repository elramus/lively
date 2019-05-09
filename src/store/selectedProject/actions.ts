import { SELECT_PROJECT, SelectProjectAction } from './types'

export const selectProject = (
  name: string,
): SelectProjectAction => ({
  type: SELECT_PROJECT,
  name,
})
