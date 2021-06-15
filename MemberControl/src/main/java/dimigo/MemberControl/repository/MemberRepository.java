package dimigo.MemberControl.repository;

import dimigo.MemberControl.domain.Member;

import java.util.ArrayList;

public interface MemberRepository {
    Member save(Member member);
        Member findById(int id);
    Member findByName(String name);
    ArrayList<Member> findAll();
}
