class WatchlistSerializer < ActiveModel::Serializer
  attributes :id, :movies
  has_one :user
end
