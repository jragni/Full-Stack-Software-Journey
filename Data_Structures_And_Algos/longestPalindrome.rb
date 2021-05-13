=begin
  Given a string, find the longest substring which is a palindrome
=end

def longest_palindrome(string)
  # edge case 1: the whole string is a palindrome
  if(string == string.reverse)
    return string
  end
  longest = 0 
  longest_pal = ""
  (0...string.length-1).each do |i|
    (i+1..string.length-1).each do |j|
      if(string[i..j] == string[i..j].reverse && longest<string[i..j].length)
        longest_pal = string[i..j]
        longest = longest_pal.length
      end
    end
  end
  return longest_pal
end


puts longest_palindrome('forgeeksskeegfor')
puts longest_palindrome('Geeks')
