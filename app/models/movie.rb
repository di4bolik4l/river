class Movie < ApplicationRecord
    has_many :watchlist_movies, dependent: :destroy
    has_many :watchlists, through: :watchlist_movies
end
