class AnimeSerializer < ActiveModel::Serializer
  attributes :id, :title, :img_url, :description, :cast_member_1, :cast_member_2, :cast_member_3
  
end
