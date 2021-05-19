=begin
    given a sentence
    remove the first vowel of every element if even
    remove last vowel if odd 
    return string
=end

def cypher(string)
    # split the string into words
    # loop through each word with index
    # if index is odd -> remove first vowel of word
    # else ->remove last vowel of word
    # helper function, new_word to remove first or last
    # rejoin array to string
    # return the sentence

    words = string.split(' ')
    puts words
    words.each_with_index do |word, idx|
        words[idx] = new_word(word,idx)
    end

    return words.join(" ")
end


def new_word(word, idx)
    vowels = 'aeiouAEIOU'
    if idx%2 == 0 
        (0...word.length).each do |idx|
            if vowels.include?(word[idx])
                return word[0...idx] + word[idx+1..-1]
            end
        end
    else
        n = word.length-1
      while (n>=0)
        if vowels.include?(word[n])
            return word[0...n] + word[n+1..-1]
        end
        n-=1

      end
    end
    
end
puts
print cypher("Hello from the other side")  # => Hllo frm th ther sde
puts