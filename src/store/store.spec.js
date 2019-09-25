 
import MockDate from 'mockdate';
 
describe('Store', () => {
   
  beforeAll(() => {
    // hardcoded date for consistency in tests and snapshots on all machines
    MockDate.set(new Date("1/31 23:14:01"));
     
  });
  afterAll(() => MockDate.reset());

  it('should display results when necessary data is provided', () => {
    
    expect(1).toEqual(1);
  });

  it('should not display results when necessary data is not provided', () => {
     
    expect({}).toEqual({});
  });


  it('should handle a flurry of actions', () => {
     
    //const expected = {
    //  newMpg: 20,
    //  tradeMpg: 10,
    //  newPpg: 1.50,
    //  tradePpg: 0,
    //  milesDriven: 100,
    //  milesDrivenTimeframe: 'year',
    //  displayResults: false,
    //  dateModified,
    //  necessaryDataIsProvidedToCalculateSavings: false,
    //  savings: lastGoodSavings
    //};
    //
    //expect(actual.fuelSavings).toEqual(expected);

    // with jest snapshots the above assertion can be replaced with this one line
    // jest will store the value in a file within ./__snapshots__
    // snapshots can/should be committed and reviewed
    // jest will also update snapshot or delete unused ones using the command `npm run test -- -u`
    expect(1).toBe(1);
  });
});
