import { createReducer, on } from '@ngrx/store';
import * as ArticleActions from '../actions/article.action';
import { ArticlesState } from 'src/states/article.state';
const initialState: ArticlesState ={
    list: [],
    error: '',
    isSuccess: true,
    isLoading: false
};

export const articlesReducer = createReducer(initialState,
    on(ArticleActions.getPaginate,(state) => ({...state, isLoading:true })),
    on(ArticleActions.getPaginateSuccess,(state, action)=> ({...state,list:action.list, isLoading:false, error:'',isSuccess:true})),
    on(ArticleActions.getPaginateFail,(state, action)=> ({...state, list:[],error:action.error, isLoading:false,isSuccess:false}))
    );
