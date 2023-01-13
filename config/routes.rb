Rails.application.routes.draw do
  
  resources :animes
  resources :tv_shows
  resources :movies
  resources :watchlist_animes
  resources :watchlist_tvshows
  resources :watchlist_movies
  resources :watchlists
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
