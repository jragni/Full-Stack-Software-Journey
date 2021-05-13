=begin
  write a function that takes in an array and target and returns the two elements in the array if is a product
=end

def product(array, target)
 # create an dictionary of potential answers
  # key -> element v -> potential answer
  
  # walk the array
  # if the ele is a key , return an array of the key and the ele
  # else add the ele to the dictionary
  dict = {} 
  array.each do |ele|
    potential_answer = target/ele
    if dict[potential_answer]
      return [potential_answer, ele]
    else
     dict[ele] = potential_answer
    end
      
  end 
  return []
end


print product([2,4],8)


