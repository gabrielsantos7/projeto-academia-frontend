import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCepMask]',
})
export class CepMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (value.length > 0) {
      // Aplica a máscara XXXXX-XXX ao valor
      value = `${value.slice(0, 5)}-${value.slice(5, 8)}`;
    }

    input.value = value;
  }
}
