import { AppInitializer } from './app-initializer';

describe('AppComponent', () => {
    let service: AppInitializer;

    beforeEach(async () => {
        service = new AppInitializer();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('init()', () => {
        it('should return true', (done: jest.DoneCallback) => {
            service.init().subscribe(result => {
                expect(result).toBe(true);
                done();
            });
        });
    });
});
