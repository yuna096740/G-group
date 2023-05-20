names = ["Yusei", "Tomoki", "Rea", "Kazushi", "Motoki"]
result = names.shuffle

for i in 0...result.length
  puts "#{i+1}: #{result[i]}"
end