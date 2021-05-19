
=begin
    write a method that takes in an array and a hash
    if the hash contains the key, replace the key with the hash
    else replace the string with a ?
=end 
sent = 'the green dog ran away because of my cousin alfred.'
hash = {
    "d" => 'c',
    "e" => 'a',
    "g" => 'k',
    'f' => 'z',
    'o' => 'a'
}

def keySwap(sent, hash)
    
    # break the sentence into words using .split(' ')
    # for each word replace with letters from hash or ?
        # todo: replace_word
        # add word to new sentence
    # return the word 
    
    words = sent.split(' ')
    new_sentence_arr = []

    words.each do |word|
        new_word = replace_word(word, hash)
        new_sentence_arr.push(new_word)
    end

    return new_sentence_arr.join(' ')

end


def replace_word(word,hash)
    new_str = ''
    word.each_char do |char|
        if hash.has_key?(char)
            new_str += hash[char]
        else
            new_str+= '?'
        end
    end
    return new_str
end

print(keySwap(sent, hash))