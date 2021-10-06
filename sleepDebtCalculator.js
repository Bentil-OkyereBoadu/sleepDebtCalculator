const getSleepHours = day => {
    day = day.toLowerCase();
    switch(day){
      case 'monday': return 8;
      break;
      case 'tuesday': return 8;
      break;
      case 'wednesday': return 8;
      break;
      case 'thursday': return 8;
      break;
      case 'friday': return 8;
      break;
      case 'saturday': return 8;
      break;
      case 'sunday': return 8;
      break;
    }
  };
  
  const getActualSleepHours = () =>
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () =>{
    let idealHours = 5;
    idealHours *= 7;    //total ideal sleep hours/week
    return idealHours;
  };  
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(); 
    if (actualSleepHours == idealSleepHours){
      console.log('You have a perfect amount of sleep!');
    }else if(actualSleepHours > idealSleepHours){
      console.log(`You got more than enough sleep! You had ${actualSleepHours - idealSleepHours} hours of extra sleep.`);
    } else if(actualSleepHours < idealSleepHours){
      console.log(`You need some rest, get sleep! You need ${idealSleepHours - actualSleepHours} hours of sleep.`);
    }
  };
  calculateSleepDebt();
  

