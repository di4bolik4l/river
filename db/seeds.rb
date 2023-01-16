WatchlistMovie.destroy_all
Watchlist.destroy_all
Movie.destroy_all
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
                    last_name: "La Rosa"
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

the_lion_king = Movie.create(
                            title: "The Lion King", 
                            img_url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpGOeTdpPET8OvEtjBBg03Wze_EZKu61WNaK4mxfoVcPZmZEN6", 
                            genre: "For the Family", 
                            description: "The best lion movie ever", 
                            director: "Roger Allers", 
                            cast: "", 
                            cast_member_1: "Sam Wizard", 
                            cast_member_2: "Leah Cardoz", 
                            cast_member_3: "Mustafa Goat"
                            )

the_lord_of_the_rings_the_fellowship_of_the_ring = Movie.create(title: "The Lord of the Rings: The Fellowship of the Ring",
                            img_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-hQp-geKRR9PGKRbf-QjY_HA6ha5ZnpQ8dVNbiSMqZi5Z6rue",
                            genre: "Fantasy",
                            description: "Jewelry was involved",
                            director: "Peter Jackson",
                            cast: "",
                            cast_member_1: "Elijah Wood", 
                            cast_member_2: "Orlando Bloom", 
                            cast_member_3: "Viggo Mortensen"
                            )

john_wick = Movie.create(
                            title: "John Wick",
                            img_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRa0Vh4sOXV7xXUypFZJVFnWDmAOX4j50bMT0g6FhdnLcU_GPW9",
                            genre: "Action",
                            description: "How many times have we told you? Do not kill the dog!",
                            cast: "",
                            cast_member_1: "Keanu Reeves", 
                            cast_member_2: "Ian McShane", 
                            cast_member_3: "Lance Reddick"
                            )

the_long_kiss_goodnight = Movie.create(
                            title: "The Long Kiss Tonight",
                            img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGPjCDa2XCKXzmYJsdjzxU1-PIFPHb_F2lo2yj9pkMJ5290XM",
                            genre: "Action",
                            description: "Badass woman with amnesia drops the amnesia and picks up a gun",
                            cast: "",
                            cast_member_1: "Geena Davis", 
                            cast_member_2: "Samuel L. Jackson", 
                            cast_member_3: "Craig Bierko"
                            )

the_bourne_identity = Movie.create(
                            title: "The Bourne Identity",
                            img_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxXJ7lPvbG5uhFbIKMN_YnWr6dB2FEdjQ49yk6kDMuPCjG3DOt",
                            genre: "Action",
                            description: "Dude with amnesia drops the amnesia and picks up a gun",
                            cast: "",
                            cast_member_1: "Matt Damon", 
                            cast_member_2: "Julia Stiles", 
                            cast_member_3: "Franka Potente"
                            )

puts "Movies Seeded"

# CREATING WATCHLIST
puts "Creating Watchlists"

user1_watchlist = Watchlist.create(user_id: user1.id)
user2_watchlist = Watchlist.create(user_id: user2.id)
user3_watchlist = Watchlist.create(user_id: user3.id)

puts "Watchlists Seeded"

#CREATING WATCHLIST_MOVIES JOINER
puts "Creating Watchlist_Movie Joiner"

user1_watchlist_movie = WatchlistMovie.create(
                                            watchlist_id: user1_watchlist.id, 
                                            movie_id: the_lion_king.id
                                            )

user1_watchlist_movie = WatchlistMovie.create(
                                            watchlist_id: user1_watchlist.id, 
                                            movie_id: the_bourne_identity.id
                                            )

user2_watchlist_movie = WatchlistMovie.create(
                                            watchlist_id: user2_watchlist.id, 
                                            movie_id: the_lion_king.id
                                            )

user2_watchlist_movie = WatchlistMovie.create(
                                            watchlist_id: user2_watchlist.id, 
                                            movie_id: john_wick.id
                                            )

user2_watchlist_movie = WatchlistMovie.create(
                                            watchlist_id: user2_watchlist.id, 
                                            movie_id: the_lord_of_the_rings_the_fellowship_of_the_ring.id
                                            )

user3_watchlist_movie = WatchlistMovie.create(
                                            watchlist_id: user3_watchlist.id,
                                            movie_id: the_long_kiss_goodnight.id
                                            )

user3_watchlist_movie = WatchlistMovie.create(
                                            watchlist_id: user3_watchlist.id,
                                            movie_id: the_bourne_identity.id
                                            )

user3_watchlist_movie = WatchlistMovie.create(
                                            watchlist_id: user3_watchlist.id,
                                            movie_id: john_wick.id
                                            )

user3_watchlist_movie = WatchlistMovie.create(
                                            watchlist_id: user3_watchlist.id,
                                            movie_id: the_lion_king.id
                                            )

user3_watchlist_movie = WatchlistMovie.create(
                                            watchlist_id: user3_watchlist.id, 
                                            movie_id: the_lord_of_the_rings_the_fellowship_of_the_ring.id
                                            )

puts "Wathlist_Movie Joiner Seeded"


# SEEDING COMPLETED
puts "Data Seeded Successfully"