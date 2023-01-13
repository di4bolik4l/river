class WatchlistTvshow < ApplicationRecord
    belongs_to :watchlist
    belongs_to :tv_show
end
