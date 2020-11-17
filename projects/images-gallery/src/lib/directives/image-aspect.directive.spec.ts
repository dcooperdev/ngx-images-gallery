import { ImageAspectDirective } from './image-aspect.directive';

describe('ImageAspectDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('img')
    };

    const directive = new ImageAspectDirective(elRefMock, 'testClass');
    expect(directive).toBeTruthy();
  });
});
