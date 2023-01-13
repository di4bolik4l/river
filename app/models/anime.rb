class Anime < ApplicationRecord
    has_many :watchlist_animes, dependent: :destroy
    has_many :watchlists, through: :watchlist_animes
end
