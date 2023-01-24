class WatchlistAnimeSerializer < ActiveModel::Serializer
  attributes :id
  has_one :anime
end
