class A {
  public name: string = 'SubModuleA';
  public last: number = 2;
}
class B {
  public name = 'shit';
  public yy = new A();
  public protoChange() {
    return 2;
  }
}

export {
  A,
  B
};
