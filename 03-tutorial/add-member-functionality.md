# メンバー追加機能を実装しよう

## Mapper

### MemberMapper.java

```java
@Mapper
public interface MemberMapper {
    List<Member> all();
    List<Member> findByNameLike(String words);
    void add(Member member);
}
```

### MemberMapper.xml

```xml
<mapper namespace="com.example.search.mappers.MemberMapper">
    <!-- 中略 -->
    <insert id="add" parameterType="com.example.search.domains.Member">
        INSERT INTO members(name) VALUES (#{name});
    </insert>
</mapper>
```

## Controller

## Domain

## Template
