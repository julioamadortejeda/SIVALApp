import { DobleplayModule } from './dobleplay.module';

describe('DobleplayModule', () => {
  let dobleplayModule: DobleplayModule;

  beforeEach(() => {
    dobleplayModule = new DobleplayModule();
  });

  it('should create an instance', () => {
    expect(dobleplayModule).toBeTruthy();
  });
});
