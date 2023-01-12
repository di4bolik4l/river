class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :profile_pic, :email, :first_name, :last_name
end
