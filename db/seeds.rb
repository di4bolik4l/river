WatchlistMovie.destroy_all
WatchlistTvshow.destroy_all
WatchlistAnime.destroy_all
Watchlist.destroy_all
Movie.destroy_all
TvShow.destroy_all
Anime.destroy_all
User.destroy_all
Admin.destroy_all

#CREATING ADMIN
# admin1 = Admin.create(username: )

# CREATING USERS
puts "Creating User"

user1 = User.create(username: "diabolikal", 
                    password:"Word1234!", 
                    profile_pic:"https://media.licdn.com/dms/image/D5635AQF2LGn2lbB-LA/profile-framedphoto-shrink_100_100/0/1671217236933?e=1675090800&v=beta&t=ITg4ZN0gbpRBJykYulrr2A3fQeABh7MWsPLJHyh3LKM", 
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
                            description:    "This Disney animated feature follows the adventures of the young lion Simba (Jonathan Taylor Thomas), 
                                            the heir of his father, Mufasa (James Earl Jones). Simba's wicked uncle, Scar (Jeremy Irons), 
                                            plots to usurp Mufasa's throne by luring father and son into a stampede of wildebeests. 
                                            But Simba escapes, and only Mufasa is killed. Simba returns as an adult (Matthew Broderick) 
                                            to take back his homeland from Scar with the help of his friends Timon (Nathan Lane) and Pumbaa (Ernie Sabella).", 
                            director: "Roger Allers", 
                            cast: "", 
                            cast_member_1: "Jonathan Taylor Thomas", 
                            cast_member_2: "James Earl Jones", 
                            cast_member_3: "Jeremy Irons",
                            netflix: nil,
                            prime: "https://www.amazon.com/",
                            hulu: nil,
                            crunchyroll: nil,
                            )

the_lord_of_the_rings_the_fellowship_of_the_ring = Movie.create(title: "The Lord of the Rings: The Fellowship of the Ring",
                            img_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-hQp-geKRR9PGKRbf-QjY_HA6ha5ZnpQ8dVNbiSMqZi5Z6rue",
                            genre: "Fantasy",
                            description: "Jewelry was involved",
                            director: "Peter Jackson",
                            cast: "",
                            cast_member_1: "Elijah Wood", 
                            cast_member_2: "Orlando Bloom", 
                            cast_member_3: "Viggo Mortensen",
                            netflix: nil,
                            prime: nil,
                            hulu: "https://www.hulu.com/",
                            crunchyroll: nil,
                            )

the_lord_of_the_rings_the_two_towers = Movie.create(title: "The Lord of the Rings: The Two Towers",
                            img_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRwGa4nRXkNkf9jdGLJSi6S-n6eAogQPNSyauuVoyw6Ejqr1nHO",
                            genre: "Fantasy",
                            description: "Jewelry was involved again",
                            director: "Peter Jackson",
                            cast: "",
                            cast_member_1: "Elijah Wood", 
                            cast_member_2: "Orlando Bloom", 
                            cast_member_3: "Viggo Mortensen",
                            netflix: nil,
                            prime: nil,
                            hulu: "https://www.hulu.com/",
                            crunchyroll: nil,
                            )

the_lord_of_the_rings_the_return_of_the_king = Movie.create(title: "The Lord of the Rings: The Return of the King",
                            img_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRB0R_wp7Zr0SWNnDXkJYU-8ZxZYSOFQvnVkT4hdAGA1ZhjUssN",
                            genre: "Fantasy",
                            description: "Finally no more jewelry",
                            director: "Peter Jackson",
                            cast: "",
                            cast_member_1: "Elijah Wood", 
                            cast_member_2: "Orlando Bloom", 
                            cast_member_3: "Viggo Mortensen",
                            netflix: nil,
                            prime: nil,
                            hulu: "https://www.hulu.com/",
                            crunchyroll: nil,
                            )

john_wick = Movie.create(
                            title: "John Wick",
                            img_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRa0Vh4sOXV7xXUypFZJVFnWDmAOX4j50bMT0g6FhdnLcU_GPW9",
                            genre: "Action",
                            description: "How many times have we told you? Do not kill the dog!",
                            director: "Chad Stahelski",
                            cast: "",
                            cast_member_1: "Keanu Reeves", 
                            cast_member_2: "Ian McShane", 
                            cast_member_3: "Lance Reddick",
                            netflix: nil,
                            prime: nil,
                            hulu: "https://www.hulu.com/",
                            crunchyroll: nil,
                            )

            

the_long_kiss_goodnight = Movie.create(
                            title: "The Long Kiss Tonight",
                            img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGPjCDa2XCKXzmYJsdjzxU1-PIFPHb_F2lo2yj9pkMJ5290XM",
                            genre: "Action",
                            description: "Badass woman with amnesia drops the amnesia and picks up a gun",
                            director: "Renny Harlin",
                            cast: "",
                            cast_member_1: "Geena Davis", 
                            cast_member_2: "Samuel L. Jackson", 
                            cast_member_3: "Craig Bierko",
                            netflix: nil,
                            prime: nil,
                            hulu: "https://www.hulu.com/",
                            crunchyroll: nil,
                            )

the_bourne_identity = Movie.create(
                            title: "The Bourne Identity",
                            img_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxXJ7lPvbG5uhFbIKMN_YnWr6dB2FEdjQ49yk6kDMuPCjG3DOt",
                            genre: "Action",
                            description: "Dude with amnesia drops the amnesia and picks up a gun",
                            director: "Doug Liman",
                            cast: "",
                            cast_member_1: "Matt Damon", 
                            cast_member_2: "Julia Stiles", 
                            cast_member_3: "Franka Potente",
                            netflix: nil,
                            prime: "https://www.amazon.com/",
                            hulu: "https://www.hulu.com/",
                            crunchyroll: nil,
                            )

bullet_train = Movie.create(
                            title: "Bullet Train",
                            img_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSa_XrN4EhTrkQgTNM9vlQbwZ5VqhVLh7rqWAJ6un2GZdhjgR6K",
                            genre: "Action",
                            description: "Five assassins board a Japanese bullet train bound for Kyoto and come to discover that their seemingly separate missions are mysteriously linked.",
                            director: "David Leitch",
                            cast: "",
                            cast_member_1: "Brad Pitt", 
                            cast_member_2: "Joey King", 
                            cast_member_3: "Aaron Taylor-Johnson",
                            netflix: "https://www.netflix.com/",
                            prime: "https://www.amazon.com/",
                            hulu: nil,
                            crunchyroll: nil,
                            )

the_old_guard = Movie.create(
                            title: "The Old Guard",
                            img_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJ2Nvloof0ra-_0SVISuKafVlXOCLVBRq_adEIGMx2f9Y1xgWE",
                            genre: "Action",
                            description: "A group of mercenaries, all centuries-old immortals with the ablity to heal themselves, discover someone is onto their secret, and they must fight to protect their freedom.",
                            director: "Gina Prince-Bythewod",
                            cast: "",
                            cast_member_1: "Brad Pitt", 
                            cast_member_2: "Joey King", 
                            cast_member_3: "Aaron Taylor-Johnson",
                            netflix: "https://www.netflix.com/",
                            prime: nil,
                            hulu: nil,
                            crunchyroll: nil,
                            )

peppermint = Movie.create(
                        title: "Peppermint",
                        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjju683FexrEbooRfQZZjrPK8fnQOgcoNx15VMGEMivTVUSRSW",
                        genre: "Action",
                        description: "After her family is murdered, a mild-mannered mom remakes herself into a badass vigilante in order to exact violent justice",
                        director: "Pierre Morel",
                        cast: "",
                        cast_member_1: "Jennifer Garner", 
                        cast_member_2: "John Ortiz", 
                        cast_member_3: "John Gallagher Jr.",
                        netflix: "https://www.netflix.com/",
                        prime: "https://www.amazon.com/",
                        hulu: nil,
                        crunchyroll: nil,
                        )

puts "Movies Seeded"

#CREATING TV SHOWS
puts "Creating TV Shows"

stranger_things = TvShow.create(
                        title: "Stranger Things",
                        img_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg",
                        genre: "Adventure",
                        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl",
                        cast: "",
                        cast_member_1: "Winona Ryder", 
                        cast_member_2: "Millie Bobby Brown", 
                        cast_member_3: "David Harbour",
                        netflix: "https://www.netflix.com/",
                        prime: nil,
                        hulu: nil,
                        crunchyroll: nil,
                        )

wednesday = TvShow.create(
                        title: "Wednesday",
                        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMvzTK3P4utQeyTN-LXqnSI0RVoqvqxT50J6jbX61_vBydTUS",
                        genre: "Deadpan",
                        description: "While attending Nevermore Academy, Wednesday Addams attempts to master her emerging psychic ability, thwart a killing spree and solve the mystery that embroiled her parents 25 years ago.",
                        cast: "",
                        cast_member_1: "Jenna Ortega", 
                        cast_member_2: "Gwendoline Christie", 
                        cast_member_3: "Christina Ricci",
                        netflix: "https://www.netflix.com/",
                        prime: nil,
                        hulu: nil,
                        crunchyroll: nil,
                        )

trailer_park_boys = TvShow.create(
                        title: "Trailer Park Boys",
                        img_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSf4CXYh8wlNBkqTaWNz3fyi2YPEOXtn1etVOzStOtVF9CE23Xs",
                        genre: "Irreverent Comedy",
                        description: "Nova Scotia's trailer parks are colorful thanks to residents Ricky, Bubbles and Julian. Together, they plan mad capers, usually get-rich-quick schemes, with plenty of screw-ups along the way. They're constantly being hunted by their former trailer park supervisor, Jim Lahey, and his perpetually shirtless, pot-belled assistant, Randy. ",
                        cast: "",
                        cast_member_1: "Mike Smith", 
                        cast_member_2: "John Paul Tremblay", 
                        cast_member_3: "Robb Wells",
                        netflix: "https://www.netflix.com/",
                        prime: "https://www.amazon.com/",
                        hulu: nil,
                        crunchyroll: nil,
                        )

the_last_dance = TvShow.create(
                        title: "The Last Dance",
                        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xqGn2bgDl-Dn_IH89b5GHU2ZMMyZWv5sJdeO_wp5tAUZPKGM",
                        genre: "Documentary",
                        description: "In the fall of 1997, Michael Jordan and the Chicago Bulls allowed a film crew to follow them as they went for their sixth NBA title in eight seasons.",
                        cast: "",
                        cast_member_1: "Michael Jordan", 
                        cast_member_2: "Scottie Pippen", 
                        cast_member_3: "Dennis Rodman",
                        netflix: "https://www.netflix.com/",
                        prime: "https://www.amazon.com/",
                        hulu: "https://www.hulu.com/",
                        crunchyroll: nil,
                        )

the_lord_of_the_rings_the_rings_of_power = TvShow.create(
                        title: "The Lord of the Rings: The Rings of Power",
                        img_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYePau2d1foYT_KGcCIqR9ZNbBnYm7oRAtL4ZNVU6NdfMgZbau",
                        genre: "Fantasy",
                        description: "This series brings to screens for the very first time the heroic legends of the fabled Second Age of Middle-earth's history.",
                        cast: "",
                        cast_member_1: "Morfydd Clark", 
                        cast_member_2: "Robert Aramayo", 
                        cast_member_3: "Sophia Nomvete",
                        netflix: nil,
                        prime: "https://www.amazon.com/",
                        hulu: nil,
                        crunchyroll: nil,
                        )

house = TvShow.create(
                        title: "House",
                        img_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpuyyt-jkqBNz7rRElj_znOVAGQSAgOlja5pRGDKvsJBbc5KnX",
                        genre: "Drama",
                        description: "At fictional Princeton Plainsboro Teaching Hospital in New Jersey, prickly genius Dr. Gregory House tackles health mysteries as would a medical Sherlock Holmes, all the while playing mind games with colleagues that include his best friend, oncologist James Wilson.",
                        cast: "",
                        cast_member_1: "Hugh Laurie", 
                        cast_member_2: "Robert Seah Leonard", 
                        cast_member_3: "Lisa Edelstein",
                        netflix: nil,
                        prime: "https://www.amazon.com/",
                        hulu: nil,
                        crunchyroll: nil,
                        )

reacher = TvShow.create(
                        title: "Reacher",
                        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM88WOtwaWcilhTKO4ZxT5fZijDlVuWqTZ2JG_mGhIZCYmIYB9",
                        genre: "Action",
                        description: "Jack Reacher, a veteran military police investigator, has recently entered civilian life when he is falsely accused of murder.",
                        cast: "",
                        cast_member_1: "Alan Richson", 
                        cast_member_2: "Willa Fitzgerald", 
                        cast_member_3: "Kristin Kreuk",
                        netflix: nil,
                        prime: "https://www.amazon.com/",
                        hulu: nil,
                        crunchyroll: nil,
                        )

peaky_blinders = TvShow.create(
                        title: "Peaky Blinders",
                        img_url: "https://flxt.tmsimg.com/assets/p10182741_b_v8_aa.jpg",
                        genre: "Period Piece",
                        description: "Britain is a mixture of despair and hedonism in 1919 in the aftermath of the Great War. Returning soldiers, newly minted revolutions and criminal gangs are fighting for survival in a nation rocked by economic upheaval.",
                        cast: "",
                        cast_member_1: "Cillian Murphy", 
                        cast_member_2: "Paul Anderson", 
                        cast_member_3: "Tom Hardy",
                        netflix: "https://www.netflix.com/",
                        prime: nil,
                        hulu: nil,
                        crunchyroll: nil,
                        )
                        
after_life = TvShow.create(
                        title: "After Life",
                        img_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwwIjFFQD-vjll7dl7Rp1OunXjDc5GR5a4Xj85gzSauO8yJ_Co",
                        genre: "Drama",
                        description: "Tony had a perfect life -- until his wife Lisa died. After that tragic event, the formerly nice guy changed. After contemplating taking his life, Tony decides he would rather live long enough to punish the world by saying and doing whatever he likes.",
                        cast: "",
                        cast_member_1: "Ricky Gervais", 
                        cast_member_2: "Diane Morgan", 
                        cast_member_3: "Mandeep Dhillon",
                        netflix: "https://www.netflix.com/",
                        prime: nil,
                        hulu: nil,
                        crunchyroll: nil,
                        )

tom_clancys_jack_ryan = TvShow.create(
                        title: "Tom Clancy's Jack Ryan",
                        img_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTsRVJS9tgUzUYmB7LIciaP-69rFKvokPSFcvKObjTQwbIr7oPc",
                        genre: "Thriller",
                        description: "Author Tom Clancy introduced the character of Jack Ryan in a series of books before Ryan headed to the big screen in several films. Now the former U.S. Marine is featured in an episodic series for the first time, with John Krasinski portraying Ryan in this Amazon original thriller that centers on Ryan as an up-and-coming CIA analyst. He is thrust into a dangerous field assignment for the first time and uncovers a pattern in terrorist communication. That launches him into the middle of a dangerous gambit with a new breed of terrorism that threatens destruction on a global scale.",
                        cast: "",
                        cast_member_1: "John Krasinski", 
                        cast_member_2: "Wendell Pierce", 
                        cast_member_3: "Abi Cornish",
                        netflix: nil,
                        prime: "https://www.amazon.com/",
                        hulu: nil,
                        crunchyroll: nil,
                        )

puts "TV Shows Seeded"

#CREATING ANIME
puts "Creating Anime"

naruto = Anime.create(
                    title: "Naruto",
                    img_url: "https://flxt.tmsimg.com/assets/p194893_b_v8_ac.jpg",
                    description: "It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
                    cast: "",
                    cast_member_1: "",
                    cast_member_2: "",
                    cast_member_3: "",
                    netflix: "https://www.netflix.com/",
                    prime: nil,
                    hulu: nil,
                    crunchyroll: "https://www.crunchyroll.com/",
                    )

naruto_shippuden = Anime.create(
                    title: "Naruto Shippuden",
                    img_url: "https://m.media-amazon.com/images/I/81qb4I6rbsL._AC_UF894,1000_QL80_.jpg",
                    description: "Naruto Uzumaki wants to be the best ninja in the land. He's done well so far, but with the looming danger posed by the mysterious Akatsuki organization, Naruto knows he must train harder than ever and leaves his village for intense exercises that will push him to his limits.",
                    cast: "",
                    cast_member_1: "",
                    cast_member_2: "",
                    cast_member_3: "",
                    netflix: nil,
                    prime: nil,
                    hulu: "https://www.hulu.com/",
                    crunchyroll: "https://www.crunchyroll.com/",
                    )

my_hero_academia = Anime.create(
                    title: "My Hero Academia",
                    img_url: "https://i5.walmartimages.com/asr/dbfa1441-3df7-4650-9d91-53c0754b09f5_1.ce1524700470881c8c536d22fb122c3d.jpeg",
                    description: "Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers. That’s right, in a world where eighty percent of the population has some kind of super-powered “quirk,” Izuku was unlucky enough to be born completely normal. But that’s not enough to stop him from enrolling in one of the world’s most prestigious hero academies.",
                    cast: "",
                    cast_member_1: "",
                    cast_member_2: "",
                    cast_member_3: "",
                    netflix: nil,
                    prime: nil,
                    hulu: "https://www.hulu.com/",
                    crunchyroll: "https://www.crunchyroll.com/",
                    )

chainsaw_man = Anime.create(
                    title: "Chainsaw Man",
                    img_url: "https://resizing.flixster.com/Y2EVUWoQ-QO0ixvBZY1gX5_zW_Q=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMjcxZDIzMDktYmMxZi00YTY1LTkwNmQtYjU5YThjNjRmZDE0LnBuZw==",
                    description:    "Denji is a young boy who works as a Devil Hunter with the “Chainsaw Devil” Pochita. One day, as he was living his miserable life trying to pay off the debt he inherited from his parents, he got betrayed and killed. As he was losing his consciousness, he made a deal with Pochita, and got resurrected as the “Chainsaw Man”: the owner of the Devil’s heart.",
                    cast: "",
                    cast_member_1: "",
                    cast_member_2: "",
                    cast_member_3: "",
                    netflix: nil,
                    prime: "https://www.amazon.com/",
                    hulu: nil,
                    crunchyroll: "https://www.crunchyroll.com/",
                    )

attack_on_titan = Anime.create(
                    title: "Attack on Titan",
                    img_url: "https://flxt.tmsimg.com/assets/p10701949_b_v8_ah.jpg",
                    description: "Known in Japan as Shingeki no Kyojin, many years ago, the last remnants of humanity were forced to retreat behind the towering walls of a fortified city to escape the massive, man-eating Titans that roamed the land outside their fortress. Only the heroic members of the Scouting Legion dared to stray beyond the safety of the walls – but even those brave warriors seldom returned alive. Those within the city clung to the illusion of a peaceful existence until the day that dream was shattered, and their slim chance at survival was reduced to one horrifying choice: kill – or be devoured!",
                    cast: "",
                    cast_member_1: "",
                    cast_member_2: "",
                    cast_member_3: "",
                    netflix: nil,
                    prime: "https://www.amazon.com/",
                    hulu: "https://www.hulu.com/",
                    crunchyroll: "https://www.crunchyroll.com/",
                    )

one_piece = Anime.create(
                    title: "One Piece",
                    img_url: "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
                    description: "Monkey. D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who'll never give up until he's claimed the greatest treasure on Earth: the Legendary One Piece!",
                    cast: "",
                    cast_member_1: "",
                    cast_member_2: "",
                    cast_member_3: "",
                    netflix: "https://www.netflix.com/",
                    prime: nil,
                    hulu: "https://www.hulu.com/",
                    crunchyroll: "https://www.crunchyroll.com/",
                    )

jujutsu_kaisen = Anime.create(
                    title: "Jujutsu Kaisen",
                    img_url: "https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
                    description: "Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.",
                    cast: "",
                    cast_member_1: "",
                    cast_member_2: "",
                    cast_member_3: "",
                    netflix: nil,
                    prime: nil,
                    hulu: nil,
                    crunchyroll: "https://www.crunchyroll.com/",
                    )

cyberpunk_edgerunners = Anime.create(
                    title: "Cyberpunk Edgerunners",
                    img_url: "https://m.media-amazon.com/images/M/MV5BNDUyYTEzY2UtMzE2ZC00NjdjLTlmMWMtMjk2NzU4OTliOTBmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                    description: "A street kid tries to survive in a technology and body modification-obsessed city of the future.",
                    cast: "",
                    cast_member_1: "",
                    cast_member_2: "",
                    cast_member_3: "",
                    netflix: "https://www.netflix.com/",
                    prime: nil,
                    hulu: nil,
                    crunchyroll: nil,
                    )

revenger = Anime.create(
                    title: "Revenger",
                    img_url: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/ce619f5c7fd92b6a4c08d15066adb71a.jpe",
                    description: "As master assassin Usui Yuen looks into a series of assassinations made on the grand samurai clan, the Satsuma, he encounters Kurima Raizo, member and survivor of one of the attacks. Together, they discover the true nature of these murders is bigger than over stolen resources. As they get closer to the truth, will they come out alive to exact revenge?",
                    cast: "",
                    cast_member_1: "",
                    cast_member_2: "",
                    cast_member_3: "",
                    netflix: nil,
                    prime: nil,
                    hulu: nil,
                    crunchyroll: "https://www.crunchyroll.com/",
                    )

black_clover = Anime.create(
                    title: "Black Clover",
                    img_url: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/e108ae17d8d0407417cac40eb52d849a.jpe",
                    description: "In a world where magic is everything, Asta and Yuno are both found abandoned at a church on the same day. While Yuno is gifted with exceptional magical powers, Asta is the only one in this world without any. At the age of fifteen, both receive grimoires, magic books that amplify their holder’s magic. Asta’s is a rare Grimoire of Anti-Magic that negates and repels his opponent’s spells. Being opposite but good rivals, Yuno and Asta are ready for the hardest of challenges to achieve their common dream: to be the Wizard King. Giving up is never an option!",
                    cast: "",
                    cast_member_1: "",
                    cast_member_2: "",
                    cast_member_3: "",
                    netflix: nil,
                    prime: nil,
                    hulu: nil,
                    crunchyroll: "https://www.crunchyroll.com/",
                    )

puts "Anime Seeded"

# CREATING WATCHLIST
puts "Creating Watchlists"

user1_watchlist = Watchlist.create(user_id: user1.id)
user2_watchlist = Watchlist.create(user_id: user2.id)
user3_watchlist = Watchlist.create(user_id: user3.id)
user4_watchlist = Watchlist.create(user_id: user4.id)

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