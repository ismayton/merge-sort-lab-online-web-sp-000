function findMinAndRemoveSorted(array)
{
  return array.splice(0, 1)
}

function merge(firstArray, secondArray)
{
  let sortedArray = [];
  while(firstArray.length > 0 && secondArray.length > 0)
  {
    if(firstArray[0] < secondArray[0])
    {
      let min = findMinAndRemoveSorted(firstArray)
      sortedArray.push(min);
    }
    else
    {
      let min = findMinAndRemoveSorted(secondArray)
      sortedArray.push(min);
    }
  }
  return sortedArray.concat(firstArray).concat(secondArray);
}