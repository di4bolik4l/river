class UsersController < ApplicationController
	skip_before_action :authorize

	def create
		user = User.create(user_params)
			if user.valid?
				session[:user_id] = user.id
				Watchlist.create(user_id: user.id)
				render json: user, status: :created
			else
				render json:{error: user.errors.full_messages}, status: :unprocessable_entity
		end
	end
	
	def show
		user = User.find_by(id: session[:user_id])
			if user
				render json: user, status: :ok
			else 
				render json:{error: 'Not authorized'}, status: :unauthorized
		end
	end

	def update 
		user = User.find_by(id: params[:id])
		if user
			user.update(user_edit_params)
			render json: user, status: :accepted
		else
			render json: {error: "User not found"}, status: :unprocessable_entity
		end
	end
	
	
	private

		def user_params
			params.permit(:first_name, :last_name, :username, :password, :profile_pic, :email)
		end

		def user_edit_params
			params.permit(:first_name, :last_name, :username, :profile_pic, :email)
		end

		


end
