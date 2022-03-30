Rails.application.routes.draw do
  resources :pages, only: [:index]  do
    post :result
  end
  root 'pages#index'
end
