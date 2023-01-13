class TvShow < ApplicationRecord
    has_many :watchlist_tvshows, dependent: :destroy
    has_many :watchlists, through: :watchlist_tvshows
end
