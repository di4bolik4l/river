WatchlistMovie.destroy_all
Watchlist.destroy_all
User.destroy_all

# CREATING USERS
puts "Creating User"

user1 = User.create(username: "diabolikal", 
                    password:"Word1234!", 
                    profile_pic:"https://media.licdn.com/dms/image/D5635AQF2LGn2lbB-LA/profile-framedphoto-shrink_100_100/0/1671217236933?e=1674237600&v=beta&t=rxa-Xk0YA2QlwqFpHcCOhoS4N1FanixpY6crVEgVBSw", 
                    email: "diabolikal@gmail.com", 
                    first_name: "Justin", 
                    last_name: "Woodruff"
                    )

user2 = User.create(username: "wizard", 
                    password:"Wizard1234!", 
                    profile_pic:"https://media.licdn.com/dms/image/C4D03AQGxMA-klXj00A/profile-displayphoto-shrink_100_100/0/1548552295799?e=1678924800&v=beta&t=2pfjo0d650MxoLFCeW56h8qw81SP0TK8moMsDQAxbuY", 
                    email: "wizard@gmail.com", 
                    first_name: "Sam", 
                    last_name: "Wizard"
                    )

user3 = User.create(username: "meowtato", 
                    password:"Meow1234!", 
                    profile_pic:"https://media.licdn.com/dms/image/C4D03AQGxMA-klXj00A/profile-displayphoto-shrink_100_100/0/1548552295799?e=1678924800&v=beta&t=2pfjo0d650MxoLFCeW56h8qw81SP0TK8moMsDQAxbuY", 
                    email: "adam@gmail.com", 
                    first_name: "Adam", 
                    last_name: "LaRosa"
                    )

user4 = User.create(username: "afatsum", 
                    password:"Goat1234!", 
                    profile_pic:"https://media.licdn.com/dms/image/D4E03AQG00leXTh_GRA/profile-displayphoto-shrink_100_100/0/1665159510862?e=1678924800&v=beta&t=ituN8TTd9V97ZU7n77KY7A6NFirbSwp2RYzJCt45ID4", 
                    email: "mustafa@gmail.com", 
                    first_name: "Mustafa", 
                    last_name: "Goatstatus"
                    )                   

puts "Users Seeded"

# CREATING CONTENT
puts "Creating Movies"

the_lion_king = Movie.create(title: "The Lion King", img_url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpGOeTdpPET8OvEtjBBg03Wze_EZKu61WNaK4mxfoVcPZmZEN6", genre: "For the Family", description: "The best lion movie ever", director: "Phil Collins", cast: "", cast_member_1: "Sam Wizard", cast_member_2: "Leah Cardoz", cast_member_3: "Mustafa Goat")

puts "Movies Seeded"

# CREATING WATCHLIST
puts "Creating Watchlists"

user1_watchlist = Watchlist.create(user_id: user1.id)

puts "Watchlists Seeded"

#CREATING WATCHLIST_MOVIES JOINER
puts "Creating Watchlist_Movie Joiner"

user1_watchlist_movie = WatchlistMovie.create(watchlist_id: user1_watchlist.id, movie_id: the_lion_king.id)

puts "Wathlist_Movie Joiner Seeded"


# SEEDING COMPLETED
puts "Data Seeded Successfully"