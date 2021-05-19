=begin
    create a function that takes in an array and returns the unique combinations of both
=end

def unique_pairs(array)
    # initialize an answer array
    # walk the array using .each until the element before the last
        # initialize the adjacent index
            # store the combination into an answer array
    answer = []

    array.each_with_index do |ele1, i|
        array.each_with_index do |ele2, j|
            if j > i 
                answer << [ele1 , ele2]
            end
        end
    end

    return answer
    
end

print unique_pairs(["red","green",'blue'])