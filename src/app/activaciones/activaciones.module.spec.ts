import { ActivacionesModule } from './activaciones.module';

describe('ActivacionesModule', () => {
  let activacionesModule: ActivacionesModule;

  beforeEach(() => {
    activacionesModule = new ActivacionesModule();
  });

  it('should create an instance', () => {
    expect(activacionesModule).toBeTruthy();
  });
});
