# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_01_20_002150) do

  create_table "admins", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "animes", force: :cascade do |t|
    t.string "title"
    t.string "img_url"
    t.string "description"
    t.string "cast"
    t.string "cast_member_1"
    t.string "cast_member_2"
    t.string "cast_member_3"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "movies", force: :cascade do |t|
    t.string "title"
    t.string "img_url"
    t.string "genre"
    t.string "description"
    t.string "director"
    t.string "cast"
    t.string "cast_member_1"
    t.string "cast_member_2"
    t.string "cast_member_3"
    t.string "netflix"
    t.string "prime"
    t.string "hulu"
    t.string "crunchyroll"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tv_shows", force: :cascade do |t|
    t.string "title"
    t.string "img_url"
    t.string "genre"
    t.string "description"
    t.string "cast"
    t.string "cast_member_1"
    t.string "cast_member_2"
    t.string "cast_member_3"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "profile_pic"
    t.string "email"
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "watchlist_animes", force: :cascade do |t|
    t.integer "watchlist_id", null: false
    t.integer "anime_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["anime_id"], name: "index_watchlist_animes_on_anime_id"
    t.index ["watchlist_id"], name: "index_watchlist_animes_on_watchlist_id"
  end

  create_table "watchlist_movies", force: :cascade do |t|
    t.integer "watchlist_id", null: false
    t.integer "movie_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["movie_id"], name: "index_watchlist_movies_on_movie_id"
    t.index ["watchlist_id"], name: "index_watchlist_movies_on_watchlist_id"
  end

  create_table "watchlist_tvshows", force: :cascade do |t|
    t.integer "watchlist_id", null: false
    t.integer "tv_show_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["tv_show_id"], name: "index_watchlist_tvshows_on_tv_show_id"
    t.index ["watchlist_id"], name: "index_watchlist_tvshows_on_watchlist_id"
  end

  create_table "watchlists", force: :cascade do |t|
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_watchlists_on_user_id", unique: true
  end

  add_foreign_key "watchlist_animes", "animes"
  add_foreign_key "watchlist_animes", "watchlists"
  add_foreign_key "watchlist_movies", "movies"
  add_foreign_key "watchlist_movies", "watchlists"
  add_foreign_key "watchlist_tvshows", "tv_shows"
  add_foreign_key "watchlist_tvshows", "watchlists"
  add_foreign_key "watchlists", "users"
end
