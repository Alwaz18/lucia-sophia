export const container = {
    hidden: { opacity: 1, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delayChildren: 1.5,
        staggerChildren: 1
      }
    }
  }


    
export const item = {
    hidden: {  opacity: 0.2, },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 1,
        ease: "easeInOut"
      }
    }
  }

export  const boxVariants = {
    hidden: {x:10 ,opacity: 0.2},
    visible: {
      x:0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 1,
        ease: "easeInOut"
      }
    }
  }

  export  const cardAnimation = {
    hidden: {opacity:0},
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delayChildren: 1,
        ease: "easeIn",
      },
    }
  }


  export  const tagL = {
    hidden: { y:40,opacity: 0},
    visible: {
      y:0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  }