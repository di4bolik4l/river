User.destroy_all

puts "Creating User"

u1 = User.create(username: "diabolikal", password:"word", profile_pic:"https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/312448875_10160101187510729_6457983866881183081_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nUH8Umc-1AIAX9o9YaF&tn=8qEncHoj6i4QlXHC&_nc_ht=scontent-dfw5-1.xx&oh=00_AfBUVx_2KKMDjGG6pSnSyxTaHchuvDwsMFhUQsE168e8Uw&oe=63C5151B", email: "diabolikal@gmail.com", first_name: "Justin", last_name: "Woodruff")

puts "Users Seeded"