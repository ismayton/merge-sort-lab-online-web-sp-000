function findMinAndRemoveSorted(array)
{
  return array.shift()
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

function mergeSort(unsortedArray)
{
  let middle = unsortedArray.length/2
  let firstHalf = unsortedArray.slice(0, middle)
  let secondHalf = unsortedArray.slice(middle, unsortedArray.length)
  
  if(unsortedArray.length < 2)
  {
    return unsortedArray
  }
  else
  {
    merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}