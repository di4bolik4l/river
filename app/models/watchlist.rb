class Watchlist < ApplicationRecord
    belongs_to :user, dependent: :destroy

    has_many :watchlist_movies, dependent: :destroy
    has_many :movies, through: :watchlist_movies

    has_many :watchlist_tvshows, dependent: :destroy
    has_many :tv_shows, through: :watchlist_tvshows

    has_many :watchlist_animes, dependent: :destroy
    has_many :animes, through: :watchlist_animes

end
