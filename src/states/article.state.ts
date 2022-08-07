export interface Article{
  id : number;
  title: string;
  cover_image: string;
  created_at: string;
  edited_at: string;
  description: string;
}
export interface ArticlesState{
  list: Article[];
  error: string;
  isSuccess: boolean;
  isLoading: boolean;
}
