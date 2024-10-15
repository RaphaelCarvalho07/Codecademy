// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}

// Factory function to create multiple instances of pAequor
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length)
      // console.log(`This is the randomIndex: ${randomIndex}`)
      let newBase = returnRandBase()
      while (this.dna[randomIndex] === newBase) {
        newBase = returnRandBase()
      }
      this.dna[randomIndex] = newBase
      return this.dna
    },
    compareDNA(otherPAequor) {
      let commonCount = 0
      for (let i = 0; i < this.dna.length; i++) {
        this.dna[i] === otherPAequor.dna[i] ? commonCount++ : commonCount
      }

      const percentage = (commonCount / this.dna.length) * 100
      // console.log(`Percentual bruto: ${percentage}`)
      return `Specimen #${this.specimenNum} and Specimen #${otherPAequor.specimenNum} have ${percentage.toFixed(2)}% DNA in common.`
    },
    willLikelySurvive() {
      const cOrG = this.dna.filter(el => el === 'C' || el === 'G')
      return cOrG.length / this.dna.length >= 0.6
    }
  }
}

const survivingSpecimens = [];
for (let specimenNum = 1; survivingSpecimens.length < 30; specimenNum++) {
  let newSpecimen = pAequorFactory(specimenNum, mockUpStrand())
  if (newSpecimen.willLikelySurvive()) {
    survivingSpecimens.push(newSpecimen)
  }
}

let pAequor1 = pAequorFactory(1, mockUpStrand())
let pAequor2 = pAequorFactory(2, mockUpStrand())

console.log('New instance of pAequor: ', pAequor1)
console.log('New instance of pAequor: ', pAequor2)
console.log(`The mutated DNA strand is: ${pAequor1.mutate()}`)
console.log(pAequor1.compareDNA(pAequor2))
console.log(`Will likely survive: ${pAequor1.willLikelySurvive()}`)
console.log(`The pAequor's new instances are: `, survivingSpecimens)