package dimigo.MemberControl.repository;

import dimigo.MemberControl.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StringDataJPAMemberRepository extends MemberRepository, JpaRepository<Member, Integer> {

}
