package com.example.demobe.jwt;

import com.example.demobe.Security.CustomUserDetails;
import io.jsonwebtoken.*;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import java.util.Date;

@Component
@Slf4j
// ghi lock cuar lombok
public class JwtTokenProvider {
    @Value("${jwt.secret}")
    private String JWT_SECRET;
    @Value(("${jwt.expiration}"))
    private int JWT_EXPIRATION;
    // Tao jwt tu thong tin cua User
    public String generateToken(CustomUserDetails customUserDetails){
        Date now = new Date();
        Date dateExpired = new Date(now.getTime() + JWT_EXPIRATION);
        // Tao chuoi JWT tu userName
        return Jwts.builder().setSubject(customUserDetails.getUsername())
                .setIssuedAt(now)
                .setExpiration(dateExpired)
                .signWith(SignatureAlgorithm.HS512,JWT_SECRET).compact();

    }
    // lay thong tin tu user tu jwt
    public String getUserNameFromJwt(String token){
        Claims claims = Jwts.parser().setSigningKey(JWT_SECRET)
                .parseClaimsJws(token).getBody();
        // tra lai userName
        return claims.getSubject();

    }
    // Validate thong tin cua JWT
    public boolean validateToken(String token){
        try {
            Jwts.parser().setSigningKey(JWT_SECRET)
                    .parseClaimsJws(token);
            return true;
        }catch (MalformedJwtException ex  ){
            log.error(" Invalid JWT Token");
        }catch (ExpiredJwtException ex){
            log.error("Expired JWT Token");
        }catch (UnsupportedJwtException ex){
            log.error("Unsupported JWT Token");
        }catch (IllegalArgumentException ex){
            log.error("JWT claims String is Empty");
        }
        return false;
    }
}
