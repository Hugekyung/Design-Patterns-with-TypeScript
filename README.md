# Design Patterns with TS

1. Abstract Factory Pattern

    - 하나의 클래스 내에서 여러 객체를 한번에 생성할 수 있는 패턴.

2. Builder Pattern

    - 객체 생성과 표현 방법의 정의를 분리하는 방식의 패턴.

3. Factory Method Pattern

    - 구현해야할 클래스를 선언하고, 어떤 객체를 생성할 것인지는 서브 클래스에서 결정하는 방식으로 객체 생성에 대한 의존도를 낮추는 패턴.

4. Singleton Pattern
    - 오직 하나의 클래스 인스턴스만을 갖도록 보장하며, 전역적인 접근이 가능한 패턴.
    - 인스턴스 생성이 남용되지 않아 잘 활용하면 메모리 최적화에 도움이 될 수 있다.
    - 일반적으로 repository와 같이 db관련 Entitiy에 직접 접근해야 하는 경우 싱글톤 패턴으로 접근하는 것이 깔끔하다.
