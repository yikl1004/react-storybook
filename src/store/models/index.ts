const common = {
    state: {
        wow: 'wow'
    },
    reducers: {
        add: (state: any, payload: any) => `${state}${payload}`,
    }
}

// no need to extend from Models
export interface RootModel {
	common: typeof common
}

export const models: RootModel = { common }

export default common