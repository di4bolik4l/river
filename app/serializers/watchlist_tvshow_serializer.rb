class WatchlistTvshowSerializer < ActiveModel::Serializer
  attributes :id
  has_one :tv_show
end
