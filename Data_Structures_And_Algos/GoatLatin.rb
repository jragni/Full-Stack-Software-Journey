=begin
    write a function that translatess string given a hash
=end 

def element_replace(array,hash)
    new_str = ''
    array.each do |ele|
        ele.each_char do |char|
            if hash.has_key?(char)
                new_str += hash[char]
            else 
                new_str += '?'
            end
        end
    end
    return new_str
end

arr1 = ["cat"]
hash1 = {
    'c' => 'k',
    'a' => 'o'
}

p element_replace(arr1,hash1)