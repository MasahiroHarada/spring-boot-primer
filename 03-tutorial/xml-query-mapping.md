# XMLでのクエリマッピング

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.example.search.mappers.MemberMapper">
    <resultMap id="memberResultMap" type="com.example.search.domains.Member">
      <id property="id" column="id" />
      <result property="name" column="name"/>
    </resultMap>

    <select id="all" resultMap="memberResultMap">
        SELECT * FROM members
    </select>
    <select id="findByNameLike" resultMap="memberResultMap" parameterType="String">
        SELECT * FROM members WHERE name LIKE '%' || #{words} || '%'
    </select>
</mapper>
```
