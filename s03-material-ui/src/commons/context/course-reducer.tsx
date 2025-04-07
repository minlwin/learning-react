import { CourseForm, CourseModel } from "../model/course-model"
import { KEY_PREFIX } from "./utils"

const COURSE_ID_KEY = `${KEY_PREFIX}.course_id`

function nextId() {
    const idString = localStorage.getItem(COURSE_ID_KEY) || '0'
    var id = Number.parseInt(idString) + 1
    localStorage.setItem(COURSE_ID_KEY, id.toString())
    return id
}

export type CourseAction = {
    type : 'create',
    form: CourseForm
} | {
    type : 'update',
    id: number,
    form: CourseForm
} | {
    type: 'remove',
    id: number
} 

export function courseReducer(state:CourseModel, action: CourseAction) {
    switch(action.type) {
    case 'create':
        return create(state, action.form)
    case 'update':
        return update(state, action.id, action.form)
    case 'remove':
        return remove(state, action.id);
    }
}

function create(state:CourseModel, form:CourseForm) {
    const newCourse = {...form, id: nextId()}
    return {...state, newCourse}
}

function update(state:CourseModel, id:number, form:CourseForm) {
    state.set(id, {...form, id: id})
    return {...state}
}

function remove(state:CourseModel, id:number) {
    state.delete(id)
    return {...state}
}
