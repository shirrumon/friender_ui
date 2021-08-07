let list_of_img = ['prof_img_1', 'prof_img_2', 'prof_img_3', 'prof_img_4', 'prof_img_5', 'prof_img_6', 'prof_img_7', 'prof_img_8', 'prof_img_9', 'prof_img_10'];
let list_of_bio = ['bio_1', 'bio_2', 'bio_3', 'bio_4', 'bio_5', 'bio_6', 'bio_7', 'bio_8', 'bio_9', 'bio_10'];

count = 0;
document.getElementById(list_of_img[0]).style.display = 'block';
document.getElementById(list_of_bio[0]).style.display = 'block';

function SlideNext()
{
  document.getElementById(list_of_img[count]).style.display = 'block';
  document.getElementById(list_of_bio[count]).style.display = 'block';
  document.getElementById(list_of_img[count-1]).style.display = 'none';
  document.getElementById(list_of_bio[count-1]).style.display = 'none';
}

function SlidePrev()
{
  document.getElementById(list_of_img[count+1]).style.display = 'none';
  document.getElementById(list_of_bio[count+1]).style.display = 'none';
  document.getElementById(list_of_img[count]).style.display = 'block';
  document.getElementById(list_of_bio[count]).style.display = 'block';
}

function Next(){
  count++;
  if (count > 10)
  {
    count = 0;
  }
  console.log(count);
  SlideNext();
}

function Prev(){
  count--;
  if (count < 0)
  {
    count = 10;
  }
  console.log(count);
  SlidePrev();
}
