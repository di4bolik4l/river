class WatchlistTvshow < ApplicationRecord
    belongs_to :watchlist
    belongs_to :tv_show

    validates :watchlist_id, uniqueness: {scope: :tv_show_id}
end
