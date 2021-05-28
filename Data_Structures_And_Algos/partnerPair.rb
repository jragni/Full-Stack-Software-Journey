=begin 
  Write a method egg_case that accepts a sentance as an argument.
  if word is longer htan 4, egg should be added before each vowel

  if word is less than 4 
  the case of each word should be reveresed
=end

def egg_case(string)
  # split the string into words
  # for each word 
  #   check the length
  #   if it is greater than 4 characters
  #     add egg before every vowel
  #   else
  #     reverse the capitalization
  
  # 1 helper function to reverse capitalization
  # 2 helper function to add egg before every vowel
  

  new_string = ''

  words = string.split(' ')
  words.each do |word|
    if word.length > 4 
      new_string += add_egg(word) + ' '
    else
      new_string += reverse_cap(word) + ' '
    end
  end
  return new_string
end

def add_egg(word)
  vowels = 'aeiouAEIOU'
  new_word = ''
  word.each_char do | char |
    if vowels.include?(char)
      new_word+= 'egg' + char
    else
      new_word += char
    end 
  end
  
  return new_word
end


def reverse_cap(word)
  new_word = ''

  word.each_char do |char|
    if char == char.upcase
     new_word += char.downcase 

    else
      new_word += char.upcase
    end

  end
  return new_word
end



p egg_case("An old cat called JoJo went to the ocean")
p egg_case('These four traveled to Argentina')
p egg_case('LOL, this game is ridiculous!')
p egg_case('Egg')

p egg_case("")
